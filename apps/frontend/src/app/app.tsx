import NxWelcome from './nx-welcome';
import { CommonTypes, FrontendType } from '@andres-monorepo/types';

export function App() {
  const commonVariable: CommonTypes = {
    value: 'this is a common variable',
  };

  const frontendVariable: FrontendType = {
    value: 'this is a frontend variable',
  };

  console.log({ commonVariable, frontendVariable });
  return (
    <div>
      <NxWelcome title="frontend" />
    </div>
  );
}

export default App;
