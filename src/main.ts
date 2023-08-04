let myState = 0;

export function incState(): void {
  myState += 1;
}

export function getState(): number {
  return myState;
}
