/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
declare module 'fre/jsx-runtime' {
  import { Attributes, FC, IFiber } from 'fre'

  type _JSX = <P extends Attributes = {}>(
    type: FC<P>,
    attrs: P
  ) => Partial<IFiber>

  export const jsx: _JSX
  export const jsxs: _JSX
  export function Fragment(props: any): any
}
