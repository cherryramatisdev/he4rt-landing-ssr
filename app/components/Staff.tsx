import { AiOutlineTwitter } from 'react-icons/ai';
import { users } from '~/mocks/users';
import Container from '~/components/Container';

export type UserCardProps = {
  avatar: string;
  username: string;
  occupation: string;
  twitter: string;
};

const UserCard = ({ avatar, username, occupation, twitter }: UserCardProps) => (
  <div className='max-w-fit'>
    <img
      src={avatar}
      alt={`Avatar do ${username}`}
      className='mb-2.5 h-60 max-h-60 w-60 rounded-xl object-cover'
    />
    <div className='flex justify-between'>
      <div>
        <p className='font-spline text-xl font-bold text-gray-950'>
          {username}
        </p>
        <span className='font-dm text-base text-gray-650'>{occupation}</span>
      </div>
      <a
        href={twitter}
        rel='noopener noreferrer'
        target='_blank'
        className='h-fit'
      >
        <AiOutlineTwitter color='#1DA1F2' size={28} />
      </a>
    </div>
  </div>
);

export default function Staff() {
  return (
    <Container>
      <h3 className='mb-2 text-2xl font-bold text-gray-700 md:text-center md:text-4xl'>
        Com grandes <span className='text-purple-500'>poderes</span> vem grandes{' '}
        <span className='text-purple-500'>responsabilidades</span>
      </h3>
      <p className='mx-auto mb-12	max-w-4xl text-lg font-normal text-gray-750 md:text-center md:text-xl'>
        O impossível é nosso ponto de partida favorito. Conheça como a
        autencidade de cada membro da administração fez possível uma comunidade
        extraordinária. Somos movidos não pelo fácil, mas pelo surpreendente
      </p>
      <div className='grid grid-cols-1 justify-items-center gap-y-8 gap-x-11 md:grid-cols-2 lg:grid-cols-4'>
        {users.map((user) => (
          <UserCard key={`user-key-${user.username}`} {...user} />
        ))}
      </div>
    </Container>
  );
}
