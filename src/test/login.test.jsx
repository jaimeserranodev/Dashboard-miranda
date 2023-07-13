import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../styles/variables';
import '@testing-library/jest-dom/extend-expect';



//------------------TEST PARA BUTTON------------------------//

describe('Button', () => {

  it('Debería tener el texto correcto', () => {
    render(<Button data-cy="submit">Login</Button>);
    const button = screen.getByText('Login');

    expect(button).toBeInTheDocument();
  });

  it('Debería tener ese color de bacñground', () => {
    const { container } = render(<Button data-cy="submit">Login</Button>);
    
    expect(container.firstChild).toMatchSnapshot("background-color: #4EB99F;");
  });

  it('Deberia tener el color del prop', () => {
    const { container } = render(<Button data-cy="submit" color="#FF0000">Login</Button>);
    
    expect(container.firstChild).toMatchSnapshot('background-color: #FF0000');
  });

  it('Deberia tener los estilos de las props de Button', () => {
    render(
      <Button
        data-cy="submit"
        style={{ borderRadius: '10px', fontSize: '24px' }}
      >
        Login
      </Button>
    );
    const button = screen.getByRole('button', { name: 'Login' });

    expect(button).toHaveStyle('border-radius: 10px');
    expect(button).toHaveStyle('font-size: 24px');
  });

  
  
});