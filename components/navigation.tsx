'use client'
import { useState } from 'react'
import { shortAddress } from '@/lib/chain'
declare global { interface Window { ethereum?: { request: (args: { method: string; params?: unknown[] }) => Promise<string[]> } } }
export function Navigation() {
 const [account,setAccount]=useState<string>(); const [message,setMessage]=useState<string>()
 async function connect(){ if(!window.ethereum){setMessage('Install a compatible wallet to connect.');return} try { const [address]=await window.ethereum.request({method:'eth_requestAccounts'}); setAccount(address); setMessage(undefined) } catch { setMessage('Wallet connection was cancelled.') } }
 return <><header className="nav"><a className="brand" href="/">HOOD<i/></a><nav className="navlinks"><a href="/explore">Explore</a><a href="/launch">Launch</a><a href="/#how">How it works</a></nav><div className="actions"><a className="button ghost search" href="/explore" aria-label="Search tokens">Search</a>{account?<a className="button" href="/dashboard">{shortAddress(account)}</a>:<button className="button primary" onClick={connect}>Connect Wallet</button>}</div></header>{message&&<p className="mono" role="status" style={{margin:'-4px 0 10px',color:'#ffb0a9'}}>{message}</p>}</>
}
