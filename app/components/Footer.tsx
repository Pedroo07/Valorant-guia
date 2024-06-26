import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { IoLogoDiscord } from 'react-icons/io5'

export const Footer = () => {
    return (
        <footer>
            <section className='bg-zinc-800 flex justify-center items-center text-white'>
                <ul className='flex p-6 items-center text-center justify-center'>
                    <li className='hover:bg-zinc-700 rounded-sm'><a target='_blank' href="https://playvalorant.com/pt-br/download/" className='uppercase font-mark text-sm p-5'>Baixe o jogo</a></li>
                    <li className='hover:bg-zinc-700 rounded-sm'><a target='_blank' href="https://assets.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt96bcb1f792b51a6b/6116afd61da1da13cddbee74/VALORANT_Community_Competition_Guidelines_por-BR_v1.2.pdf" className='uppercase font-mark text-sm p-5'>Torneios independentes</a></li>
                    <li className='hover:bg-zinc-700 rounded-sm'><a target='_blank' href="https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect&referrer=singular_click_id%3D4a1d837a-ea2a-460e-acda-b7d98d8f6a0c&pli=1" className='uppercase text-sm font-mark p-5'>Baixe o aplicativo de celular riot mobile</a></li>
                </ul>
            </section>
            <section className='bg-black flex flex-col gap-4 items-center text-center'>
                <div>
                    <ul className='flex items-center pt-6 gap-4'>
                        <li className='bg-zinc-800 items-center flex p-1.5 rounded-md'><a target='_blank' href="https://www.facebook.com/VALORANTbrasil/"><FaFacebook className='fill-white' /></a></li>
                        <li className='bg-zinc-800 items-center flex p-1.5 rounded-md'><a target='_blank' href="https://www.instagram.com/valorantbrasil"><FaInstagram className='fill-white' /></a></li>
                        <li className='bg-zinc-800 items-center flex p-1.5 rounded-md'><a target='_blank' href="https://www.youtube.com/channel/UCgWiuB2PQIUhJgEN9No281g"><FaYoutube className='fill-white' /></a></li>
                        <li className='bg-zinc-800 items-center flex p-1.5 rounded-md'><a target='_blank' href="https://twitter.com/valorantbrasil"><FaTwitter className='fill-white' /></a></li>
                        <li className='bg-zinc-800 items-center flex p-1.5 rounded-md'><a target='_blank' href="https://discord.com/invite/valorant-br"><IoLogoDiscord className='fill-white' /></a></li>
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <Image src='/rioticon.png' width={98} height={27} alt='rioticon' className='filter contrast-50 hover:contrast-100'/>
                    <Image src='/valoranticon.png' width={98} height={55}  className='filter invert' alt='Valorant icon'/>
                </div>
                <div className='flex flex-col gap-4 items-center'>
                    <p className='text-zinc-600 max-w-4xl'>© 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT e todos os logotipos associados são marcas comerciais, marcas de serviço e/ou marcas registradas da Riot Games, Inc.</p>
                    <ul className='flex gap-8 justify-center text-center items-center text-white'>
                        <li className='hover:bg-zinc-800 rounded-sm'><a className='uppercase font-mark p-5 text-xs' href="https://www.riotgames.com/pt-br/privacy-notice-BR">Politica de privacidade</a></li>
                        <li className='hover:bg-zinc-800 rounded-sm'><a className='uppercase font-mark p-5 text-xs' href="https://www.riotgames.com/pt-br/terms-of-service-BR">Termos de serviço</a></li>
                        <li className='hover:bg-zinc-800 rounded-sm'><a className='uppercase font-mark p-5 text-xs' href="">Preferências de cookies</a></li>
                    </ul>
                    <Image src='/termos-condicoes.png' alt='termos e condições' width={171} height={100} className='m-2 bg-zinc-800 p-2 rounded-sm'/>
                </div>
            </section>
        </footer>
    )
}
