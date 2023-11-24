import { connectToDatabase } from '@/lib/db';

export async function GET({ request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('id');

  try {
    const db = await connectToDatabase();

    if (!db) {
      return new Response('No se pudo conectar a la base de datos', { status: 500 });
    }

    console.log(id);

    const playlist = await db.collection('playlists').findOne({ albumId: Number(id) });

    if(!playlist || !playlist.albumId) {
      return new Response('No se encontró la playlist', { status: 404 });
    }

    const songs = await db.collection('songs').find({ albumId: Number(playlist.albumId) }).toArray();

    if (!songs) {
      return new Response('No se encontraron las canciones', { status: 404 });
    }

    return new Response(JSON.stringify({ playlist, songs }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in API GET:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
