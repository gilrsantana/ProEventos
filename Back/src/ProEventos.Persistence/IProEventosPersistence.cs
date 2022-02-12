namespace ProEventos.Persistence
{
    public interface IProEventosPersistence
    {
        // GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void DeleteRange<T>(T[] entity) where T : class;
        Task<bool> SaveChangesAsync();
        
        // EVENTO
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrante);
        Task<Evento[]> GetAllEventosAsync(bool includePalestrante);
        Task<Evento> GetEventoByIdAsync(int EventoId, bool includePalestrante);
        
        //PALESTRANTES
        Task<Evento[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos);
        Task<Evento[]> GetAllPalestrantesAsync(bool includeEventos);
        Task<Evento> GetPalestranteByIdAsync(int PalestranteId, bool includeEventos);
        
        
    }
}