using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProEventos.Domain
{
    // Data Annotation usado para o EF
    // Modifica o nome da tabela gravada no banco de Lote para TBL_Lote
    // [Table("TBL_Lote")]
    public class Lote
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
        public DateTime? DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
        public int Quantidade { get; set; }
        public int EventoId { get; set; }
        public Evento Evento { get; set; }
    }
}