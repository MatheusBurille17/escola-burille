import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '6rem',
        fontFamily: 'var(--font-family-display)',
        margin: 0,
        color: 'var(--color-primary)'
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: '2rem',
        fontFamily: 'var(--font-family-display)',
        marginBottom: '1rem'
      }}>
        PÁGINA NÃO ENCONTRADA
      </h2>
      <p style={{
        fontSize: '1.1rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '2rem',
        maxWidth: '500px'
      }}>
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link 
        href="/"
        style={{
          padding: '1rem 2rem',
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          textDecoration: 'none',
          fontWeight: 600,
          borderRadius: '4px',
          transition: 'all 0.3s ease'
        }}
      >
        VOLTAR PARA HOME
      </Link>
    </div>
  );
}
