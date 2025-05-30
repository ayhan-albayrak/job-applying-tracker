using Api.Models;
using MediatR;
using System.Diagnostics;

namespace Api.Behaviors
{
    public class LoggingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : IRequest<TResponse>
    {
        private readonly ILogger<LoggingBehavior<TRequest, TResponse>> _logger;

        public LoggingBehavior(ILogger<LoggingBehavior<TRequest, TResponse>> logger)
        {
            _logger = logger;
        }

        public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
        {
            TResponse response = default;
            try
            {
                Stopwatch w = Stopwatch.StartNew();
                _logger.LogInformation($"Handling {typeof(TRequest).Name}");
                 response = await next();
                w.Stop();
                _logger.LogInformation($"Handled {typeof(TResponse).Name} takes {w.ElapsedMilliseconds / 1000} sec");
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error on handling {typeof(TResponse).Name}: {ex.Message}");
                return response;
            } 
        }
    }
}
