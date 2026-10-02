/** Public deployment boundary. No chain or contract is assumed until configured. */
export const chainConfig = {
  chainId: process.env.NEXT_PUBLIC_CHAIN_ID ? Number(process.env.NEXT_PUBLIC_CHAIN_ID) : undefined,
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
  explorerUrl: process.env.NEXT_PUBLIC_EXPLORER_URL,
  factoryAddress: process.env.NEXT_PUBLIC_LAUNCH_FACTORY_ADDRESS,
}
export const isProtocolConfigured = Boolean(chainConfig.chainId && chainConfig.rpcUrl && chainConfig.factoryAddress)
export const shortAddress = (value: string) => `${value.slice(0, 6)}…${value.slice(-4)}`
