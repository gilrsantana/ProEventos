using System.ComponentModel.DataAnnotations.Schema;

namespace ProEventos.Domain
{
    // Data Annotation usado para o EF
    // Modifica o nome da tabela gravada no banco de PalestranteEvento para TBL_PalestranteEvento
    // [Table("TBL_PalestranteEvento")]
    public class PalestranteEvento
    {
        public int PalestranteId { get; set; }
        public Palestrante Palestrante { get; set; }
        public int EventoId { get; set; }
        public Evento Evento { get; set; }
    }
}