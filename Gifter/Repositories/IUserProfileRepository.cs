using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        List<UserProfile> GetAll();
        void Update(UserProfile userProfile);

        UserProfile GetByIdWithPosts(int id);
    }
}