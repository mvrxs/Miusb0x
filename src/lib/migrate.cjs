const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const { MongoClient } = require('mongodb');

const ffprobe = require('@ffprobe-installer/ffprobe');
const fluentffmpeg = require('fluent-ffmpeg');

fluentffmpeg.setFfmpegPath(ffmpeg.path);
fluentffmpeg.setFfprobePath(ffprobe.path);

const fs = require('fs');
const path = require('path');

const url = 'mongodb://localhost:27017';
const dbName = 'Miusisbox';
const musicFolder = path.join(__dirname, '../../public/music');

async function migrateSongs(folder) {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Conectado a la base de datos');

    const db = client.db(dbName);
    const songsCollection = db.collection('songs');

    const folderPath = path.join(musicFolder, folder);
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);

      if (fs.statSync(filePath).isDirectory()) {
        // Si es una carpeta, llamamos recursivamente a la función para procesar su contenido
        await migrateSongs(path.join(folder, file));
      } else if (file.endsWith('.mp3')) {
        // Obtén información sobre la duración de la canción
        const duration = await getSongDuration(filePath);

        // Inserta la información en la base de datos
        await songsCollection.insertOne({
          filename: file,
          path: filePath,
          duration,
        });

        console.log(`Canción insertada: ${file}`);
      }
    }
  } finally {
    await client.close();
  }
}

async function getSongDuration(filePath) {
  return new Promise((resolve, reject) => {
    fluentffmpeg(filePath).ffprobe((err, metadata) => {
      if (err) {
        reject(err);
      } else {
        resolve(metadata.format.duration);
      }
    });
  });
}



// Inicia el proceso llamando a la función con la carpeta principal
migrateSongs('');
