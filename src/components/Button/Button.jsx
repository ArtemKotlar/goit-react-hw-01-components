import { StyledBtn } from './Button.styled';

export const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
}) => {
  return (
    <StyledBtn type={type} disabled={disabled}>
      {Icon && <Icon size="16" />}
      {children}
    </StyledBtn>
  );
};
