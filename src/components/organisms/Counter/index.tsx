import { Button } from 'components/atoms/Button';
import { Count } from 'components/atoms/Count';

export const Counter = () => (
    <div>
        <Button label="-" />
        <Count value={0} />
        <Button label="+" />
    </div>
);
