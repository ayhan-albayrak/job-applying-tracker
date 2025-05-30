using Api.Models;
using MediatR;

namespace Api.Notifications
{
    //public record ProductAddedNotification(Product Product) : INotification;

    //Altatki gibi de kullanabiliriz.
    public class ProductAddedNotification(Product Product) : INotification
    {
        public Product Product { get; } = Product;

    }
}
