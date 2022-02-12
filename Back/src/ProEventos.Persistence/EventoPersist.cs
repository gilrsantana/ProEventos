using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;
using ProEventos.Persistence.Contratos;

namespace ProEventos.Persistence
{
    public class EventoPersist : IEventoPersist
    {
        private readonly ProEventosContext _context;
        public EventoPersist(ProEventosContext context)
        {
            _context = context;
        }

        public async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrante = false)
        {
            IQueryable<Evento> query = _context.Eventos
                .Include(evento => evento.Lotes)
                .Include(evento => evento.RedesSociais);

            if (includePalestrante)
            {
                query = query.Include(evento => evento.PalestrantesEventos)
                             .ThenInclude(palestranteEvento => palestranteEvento.Palestrante);
            }
            
            query = query.OrderBy(evento => evento.Id)
                         .Where(evento => evento.Tema.ToLower().Contains(tema.ToLower()));

            return await query.ToArrayAsync();
        }

        public async Task<Evento[]> GetAllEventosAsync(bool includePalestrante = false)
        {
            IQueryable<Evento> query = _context.Eventos
                .Include(evento => evento.Lotes)
                .Include(evento => evento.RedesSociais);

            if (includePalestrante)
            {
                query = query.Include(evento => evento.PalestrantesEventos)
                             .ThenInclude(palestranteEvento => palestranteEvento.Palestrante);
            }
            
            query = query.OrderBy(evento => evento.Id);

            return await query.ToArrayAsync();
        }

        public async Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrante = false)
        {
            IQueryable<Evento> query = _context.Eventos
                .Include(evento => evento.Lotes)
                .Include(evento => evento.RedesSociais);

            if (includePalestrante)
            {
                query = query.Include(evento => evento.PalestrantesEventos)
                             .ThenInclude(palestranteEvento => palestranteEvento.Palestrante);
            }
            
            query = query.OrderBy(evento => evento.Id)
                         .Where(evento => evento.Id == eventoId);

            return await query.FirstOrDefaultAsync();
        }
    }
}