using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IEventoPersist
    {
        // EVENTO
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrante);
        Task<Evento[]> GetAllEventosAsync(bool includePalestrante);
        Task<Evento> GetEventoByIdAsync(int EventoId, bool includePalestrante);
    }
}