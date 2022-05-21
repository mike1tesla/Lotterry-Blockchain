import { useState } from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'
import "bulma/css/bulma.css"

export default function Home() {
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState()

  const connectWalLetHandler = async () => {
    // check MetaMask is installed
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        // resquest connect wallet
        await window.ethereum.request({ method: "eth_requestAccounts" })
        // create web3 instance 
        const web3 = new Web3(window.ethereum)
        // set web3 instance in React state
        setWeb3(web3)
        // get list of accounts 
        const accounts = await web3.eth.getAccounts()
        // set accounts 1 to React state 
        setAddress(accounts[0])
      }
      catch (err) {
        console.log(err.message);
      }
    }
    else {
      // MetaMask not is installed
      console.log("Please install MetaMask")
    }
  }
  return (
    <div>
      <Head>
        <title>Ether Lottery</title>
        <meta name="description" content="An Ether Lottery-dApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className='navbar mt-4 mt-4'>
          <div className='container'>
            <div className='navbar-barnd'>
              <h1>Ether Lottery</h1>
            </div>
            <div className='navbar-end'>
              <button onClick={connectWalLetHandler} className='button is-link'>Connect Wallet</button>
            </div>
          </div>
        </nav>
        <div className='container'>
          <section className='mt-5'>
            <div className='columns'>
              <div className='column is-two-thirds'>
                <section className='mt-5'>
                  <p>Enter the Lottery by sending 0.01 Ehter</p>
                  <button className='button is-link is-large is-light mt-3'>Play now</button>
                </section>
                <section className='mt-5'>
                  <p><b>Admin only:</b> Pick winner</p>
                  <button className='button is-primary is-large is-light mt-3'>Pick Winner</button>
                </section>
              </div>
              <div className={`${styles.lotteryinfo} column is-one-thirds`}>
                <section className='mt-5'>
                  <div className='card'>
                    <div className='card-content'>
                      <div className='content'>
                        <h2>History Lottery</h2>
                        <div className='history-entry'>
                          <div>Lottery #1 winner:</div>
                          <div>
                            <a href='https://etherscan.io/address/0xB80E6542b88fBF5d291c46286F2DeA7C30BEdAe3' target="_blank">
                              0xB80E6542b88fBF5d291c46286F2DeA7C30BEdAe3
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className='mt-5'>
                  <div className='card'>
                    <div className='card-content'>
                      <div className='content'>
                        <h2>Players (1)</h2>
                        <div>
                          <a href='https://etherscan.io/address/0xB80E6542b88fBF5d291c46286F2DeA7C30BEdAe3' target="_blank">
                            0xB80E6542b88fBF5d291c46286F2DeA7C30BEdAe3
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className='mt-5'>
                  <div className='card'>
                    <div className='card-content'>
                      <div className='content'>
                        <h2>Pot</h2>
                        <p>10 ETH</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>

      </main>

      <footer className={styles.footer}>
        <p>&copy; 2022 Block Explorer </p>
      </footer>
    </div>
  )
}
