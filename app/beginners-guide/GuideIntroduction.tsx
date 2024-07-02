import Image from 'next/image'
import React from 'react'

import img1 from './img/img1.png'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'

export const GuideIntroduction = () => {
    return (
        <div className='flex flex-col items-center'>
            <Image src={img1} alt='Brimstone quer te tornar um Agente melhor em VALORANT.' width={856} height={482} className='w-full h-[562px] filter blur-lg z-[-1]' />
            <section className='flex flex-col max-w-fit items-center border-b-4 border-double border-zinc-400'>
                <Image src={img1} width={1000} height={739} alt='Brimstone quer te tornar um Agente melhor em VALORANT.' className='-mt-96' />
                <h1 className='text-6xl uppercase font-tugsten'>Guia para iniciantes</h1>
                <p className='text-lg py-8 font-mark text-zinc-700'>Brimstone quer te tornar um Agente melhor em VALORANT.</p>
            </section>
            <main className='flex flex-col items-center'>
                <ul className='flex gap-2 divide-x divide-zinc-300 p-5 text-sm'>
                    <li className='text-red-500'>Anúncios</li>
                    <li>Jeff Landa</li>
                    <li>há 4 anos</li>
                </ul>
                <section className='flex flex-col max-w-[880px] gap-6'>
                    <p className='text-start text-lg font-mark'>
                        Este é o Guia para Iniciantes de VALORANT, cortesia do próprio Brimstone!<br />
                        Não importa se é a sua primeira vez no jogo ou se você só precisa relembrar<br />
                        algumas coisas... achamos que é melhor aprender com o Agente mais experiente!
                        <br /><br />
                        Abaixo está tudo o que você precisa saber antes da primeira partida.<br />
                        Como diria nosso querido Brimstone: presta atenção, quem sabe cê aprende.<br />
                    </p>
                    <Image src={img2} alt='brimstorm' width={880} height={495} />
                    <p className='text-start text-lg font-mark'>
                        Antes de começar a primeira rodada, você escolherá um personagem dentre um grupo de Agentes, cada um com sua própria função e habilidades especiais que se complementam e ajudam a vencer a partida. É possível conferir mais informações sobre cada Agente na nossa <a href="/agents" className='font-mark text-slate-700 underline decoration-red-500'>página de Agentes</a>.
                    </p>
                    <Image src={img3} alt='brimstorm' width={880} height={495} />
                    <p className='text-start text-lg font-mark'>
                        Depois que todos selecionarem seus Agentes, a equipe é <br /> enviada para um mapa aleatório e a primeira rodada tem início.
                        <br />
                        <br />
                        Você começará como atacante ou defensor e trocará de lado após algumas rodadas.<br /> No entanto, antes de assumir sua posição, você deve passar pela fase de compra, que permite<br /> comprar armas e habilidades. O que você compra ajuda a definir sua estratégia de vitória. As<br /> decisões de compra podem ser guiadas pelo seu estilo de jogo ou pela composição das equipes.
                    </p>
                    <Image src={img4} alt='brimstorm' width={880} height={495} />
                    <p className='text-start text-lg font-mark'>
                        Ninguém vai dizer como gastar seu dinheiro, mas vamos aos <br />fatos: em algum momento, você vai ter que puxar o gatilho.
                        <br />
                        <br />
                        Existe uma arma para cada situação. Você pode descobrir mais sobre elas na <br />nossa <a href="/arsenal" className='font-mark underline decoration-red-500'>página de arsenal</a>. Se bater a dúvida, tente escolher com base no tipo e veja<br /> se combina com seu estilo de jogo, sua experiência e a estratégia da sua equipe.
                    </p>
                    <Image src={img5} alt='brimstorm' width={880} height={495} />
                    <p className='text-start text-lg font-mark'>
                        Cada mapa traz uma forma diferente de colocar seu estilo de jogo em<br /> prática. Demonstre sua criatividade e mecânica de tiro a cada embate.<br /><br />

                        Abaixo temos informações básicas sobre os mapas, mas <br />você pode checar mais detalhes na nossa <a href="/maps" className='font-mark underline decoration-red-500'>página de mapas</a>.
                    </p>
                    <Image src={img6} alt='brimstorm' width={880} height={495} />
                    <p className='text-start text-lg font-mark'>
                        Bom, talvez você já saiba como abater um inimigo de todas as maneiras possíveis, mas o Brimstone sabe que a maioria chama atenção demais.
                    </p>
                    <Image src={img7} alt='brimstorm' width={880} height={495} />
                    <Image src={img8} alt='brimstorm' width={880} height={495} />
                    <p className='text-start text-lg font-mark pb-10'>
                        Chega de incertezas. Seu treinamento inicial foi concluído! Mas, assim como você, nós também estamos só começando.
                    </p>
                </section>
            </main>
        </div>
    )
}
