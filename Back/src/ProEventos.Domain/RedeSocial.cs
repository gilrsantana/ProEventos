using System.ComponentModel.DataAnnotations.Schema;

namespace ProEventos.Domain
{
    // Data Annotation usado para o EF
    // Modifica o nome da tabela gravada no banco de RedeSocial para TBL_RedeSocial
    // [Table("TBL_RedeSocial")]
    public class RedeSocial
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string URL { get; set; }
        public int? EventoId { get; set; }
        public Evento Evento { get; set; }
        public int? PalestranteId { get; set; }
        public Palestrante Palestrante { get; set; }
    }
}