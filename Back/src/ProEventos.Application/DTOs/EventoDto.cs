using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProEventos.Application.DTOs
{
    public class EventoDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Local { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]        
        public string DataEvento { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
		[StringLength(50, MinimumLength = 4, ErrorMessage = "{0} precisa ter entre 4 e 50 caracteres")]
		// [MinLength(4, ErrorMessage = "{0} precisa ter no mínimo 4 caracteres")]
		// [MaxLength(50, ErrorMessage = "{0} deve ter no máximo 50 caracteres")]
        public string Tema { get; set; }

		[Display(Name = "Quantidade de pessoas")]
		[Required(ErrorMessage = "{0} é obrigatório")]
		[Range(50, 120000, ErrorMessage = "{0} deve ser entre 50 e 120.000")]
        public int QtdPessoas { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
		[RegularExpression(@"(http(s?):)([/|.|\w|\s|-])*(\.(?:jpe?g|gif|png))?", 
							ErrorMessage = "O campo {0} deve receber um arquivo do tipo imagem")]
        public string ImagemURL { get; set; }

		[Required(ErrorMessage = "O campo {0} é obrigatório")]
		[Phone(ErrorMessage = "O campo {0} deve receber um valor do tipo telefone")]
        public string Telefone { get; set; }

        [Display(Name = "e-mail")]
		[Required(ErrorMessage = "O campo {0} é obrigatório")]
        [EmailAddress(ErrorMessage = "O campo {0} precisa receber um valor do tipo e-mail")]
        public string Email { get; set; }
        public IEnumerable<LoteDto> Lotes { get; set; }
        public IEnumerable<RedeSocialDto> RedesSociais { get; set; }
		public IEnumerable<PalestranteDto> PalestrantesEventos { get; set; }
    
    }
}