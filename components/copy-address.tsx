'use client'
import { useState } from 'react'
import { shortAddress } from '@/lib/chain'
export function CopyAddress({ address }: { address: string }) { const [copied,setCopied]=useState(false); async function copy(){try{await navigator.clipboard.writeText(address);setCopied(true);setTimeout(()=>setCopied(false),1800)}catch{}} return <div className="address"><span className="mono">{shortAddress(address)}</span><button className="copy" onClick={copy}>{copied?'COPIED':'COPY CA'}</button></div> }
