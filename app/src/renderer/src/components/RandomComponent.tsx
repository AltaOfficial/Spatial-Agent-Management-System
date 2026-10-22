import { Button } from './Button';

function RandomComponent({ className }: { className: string }): React.JSX.Element {
  return (
    <div className={className}>
      <Button>New Building</Button>
    </div>
  );
}

export { RandomComponent };
