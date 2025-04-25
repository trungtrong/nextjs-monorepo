// eslint-disable-next-line @nx/enforce-module-boundaries
import environment from '../../../../libs/shared/core/src/environments';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>Home {environment.ENV_NAME}</div>
  );
}
