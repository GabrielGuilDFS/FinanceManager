using FinanceManager.Api.DTOs;

namespace FinanceManager.Api.Interfaces
{
    public interface IAuthService
    {
        Task<bool> Register(RegisterRequest request);

        Task<string?> Login(LoginRequest request);
    }
}