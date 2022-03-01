using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProEventos.Domain
{
    // Data Annotation usado para o EF
    // Modifica o nome da tabela gravada no banco de Palestrante para TBL_Palestrante
    // [Table("TBL_Palestrante")]
    public class Palestrante
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string MiniCuriculo { get; set; }
        public string ImagemURL { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public IEnumerable<RedeSocial> RedesSociais { get; set; }
        public IEnumerable<PalestranteEvento> PalestrantesEventos { get; set; }
    }
}