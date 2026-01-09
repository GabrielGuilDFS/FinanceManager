using System.ComponentModel.DataAnnotations;

namespace FinanceManager.Api.DTOs
{
    public class RegisterRequest
    {
        [Required(ErrorMessage = "O Email e obrigatorio")]
        [EmailAddress(ErrorMessage = "E-mail em formato inválido")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "A senha e obrigatoria")]
        [MinLength(6, ErrorMessage = "A senha deve conter no minimu 6 caracteres")]
        public string Password { get; set; } = string.Empty;

        [Required(ErrorMessage = "As senhas não coincidem")]
        public string ConfirmPassword { get; set; } = string.Empty;
    }
}