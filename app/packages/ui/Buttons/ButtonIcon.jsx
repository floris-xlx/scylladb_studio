import { Button } from '@nextui-org/react';

const ButtonIcon = ({ 
    onPress, 
    children,
    margin = null,
}) => {

  return (
    <Button
        className="bg-primary hover:bg-accent transition rounded-md w-[20px] mt-[5px]"
        variant="flat"
        size="md"
        isIconOnly={true}
        onPress={() => onPress()}
  >
    {children}
  </Button>
  );
}

export default ButtonIcon;