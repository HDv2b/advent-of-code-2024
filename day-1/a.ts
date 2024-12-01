import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day1a(data: string[]) {
  let left: number[] = [];
  let right: number[] = [];

  for (const row of data) {
    const [l, r] = row.split(/\s+/g);
    left.push(parseInt(l, 10));
    right.push(parseInt(r, 10));
  }

  left = left.toSorted()
  right = right.toSorted()

  let total = 0;
  for (const n in left) {
    total += Math.abs(left[n] - right[n])
  }

  return total;
}

await runSolution(day1a);
