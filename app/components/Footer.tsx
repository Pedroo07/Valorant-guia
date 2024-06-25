import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { IoLogoDiscord } from 'react-icons/io5'

export const Footer = () => {
    return (
        <footer>
            <section className='bg-zinc-800 flex justify-center items-center text-white'>
                <ul className='flex p-6 items-center text-center justify-center'>
                    <li className='hover:bg-zinc-700 rounded-sm'><a href="" className='uppercase font-mark text-sm p-5'>Baixe o jogo</a></li>
                    <li className='hover:bg-zinc-700 rounded-sm'><a href="" className='uppercase font-mark text-sm p-5'>Torneios independentes</a></li>
                    <li className='hover:bg-zinc-700 rounded-sm'><a href="" className='uppercase text-sm font-mark p-5'>Baixe o aplicativo de celular riot mobile</a></li>
                </ul>
            </section>
            <section className='bg-black flex flex-col gap-10 items-center text-center'>
                <div className=''>
                    <ul className='flex items-center p-6 gap-4'>
                        <li className='bg-zinc-800 items-center flex p-1.5 rounded-md'><a target='_blank' href="https://www.facebook.com/VALORANTbrasil/"><FaFacebook className='fill-white' /></a></li>
                        <li className='bg-zinc-800 items-center flex p-1.5 rounded-md'><a target='_blank' href="https://www.instagram.com/valorantbrasil"><FaInstagram className='fill-white' /></a></li>
                        <li className='bg-zinc-800 items-center flex p-1.5 rounded-md'><a target='_blank' href="https://www.youtube.com/channel/UCgWiuB2PQIUhJgEN9No281g"><FaYoutube className='fill-white' /></a></li>
                        <li className='bg-zinc-800 items-center flex p-1.5 rounded-md'><a target='_blank' href="https://twitter.com/valorantbrasil"><FaTwitter className='fill-white' /></a></li>
                        <li className='bg-zinc-800 items-center flex p-1.5 rounded-md'><a target='_blank' href="https://discord.com/invite/valorant-br"><IoLogoDiscord className='fill-white' /></a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
