using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;
using ProEventos.API.Data;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // acessado via https://localhost:5501/api/evento
    public class EventosController : ControllerBase
    {
        private readonly DataContext _context;

        public EventosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        // public Evento Get()
        // {
        //     return new Evento() {
        //         EventoId = 1,
        //         Tema = "Angular 11 e .NET 5",
        //         Local = "Belo Horizonte",
        //         Lote = "1º Lote",
        //         QtdPessoas = 250,
        //         DataEvento = DateTime.Now.AddDays(2).ToString(),
        //         ImagemURL = "foto.png"
        //     };
        // }

        public IEnumerable<Evento> Get()
        {
            return _context.Eventos;
        }

        [HttpGet("{id}")]
        public Evento GetById(int id)
        {
            return _context.Eventos.FirstOrDefault(evento => evento.EventoId == id);
        }

        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de Put com id = {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de Delete com id = {id}";
        }
    }
}
