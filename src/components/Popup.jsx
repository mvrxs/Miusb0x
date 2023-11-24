 import artistas from '@/lib/artists'; 

const Popup = ({ isOpen, onClose }) => {
  return (
    <div className={`relative inset-0 flex items-end justify-center w-96 h-8`}>
{/*       <div className="fixed inset-0 bg-black opacity-1"></div>  EN UN FUTURO USAR ESTE DIV PARA CREAR UN SOMBREADO A TODO EL POPUP*/ }
 
      <div className={`relative p-6 rounded-lg bg-zinc-800 w-96 opacity-90 mr-20 mt-60 mb-10`}>
        
        <h2 className="mb-3 text-white">Lista de Artistas</h2>

        <div className="max-h-screen overflow-y-auto">
          <ul>
            {artistas.map((artista) => (
              <li key={artista.id} className="mb-6">
                <img className="mb-3" src={artista.cover} alt={artista.name} />
                <h3 className="text-white">{artista.name}</h3>
                <p className="text-gray-300">{artista.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <button className="text-white justify-center" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Popup;
 