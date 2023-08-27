export async function useDelay(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
