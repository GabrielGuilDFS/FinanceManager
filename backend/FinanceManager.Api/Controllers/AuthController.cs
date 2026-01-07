using FinanceManager.Api.DTOs;
using FinanceManager.Api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinanceManager.Api.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var success = await _authService.Register(request);
            if (!success)
            {
                return BadRequest(" E-mail ja em uso.");
            }

            return Ok("Usuario cadastrado com sucesso!");

        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var token = await _authService.Login(request);

            if (token == null)
            {
                return Unauthorized("E-mail ou senha invalidos.");
            }

            return Ok(new { token });
        }
    }
}
