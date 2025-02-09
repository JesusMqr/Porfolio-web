import socialData from '../../data/socialData.json';
import { iconsMap } from "../../data/IconsMap";


export const Hero = () => {

  const cvUrl = 'https://drive.google.com/file/d/1iRE8oF5JoK2ekBVM0MaKcqJN4iRlrPu1/view?usp=drive_link'

  return (
    <section className="h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1e293b_60%)] min-h-screen flex items-center justify-center bg-slate-900 py-12 px-4 sm:px-6 lg:px-8" id='home'>
      <div className="max-w-3xl mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-4 sm:text-5xl md:text-6xl text-cyan-400">Jesus Maquera</h1>
        <p className="text-xl text-slate-400 mb-8 sm:text-2xl">
          Desarrollador de Software
        </p>
        <p className="text-lg text-slate-300 mb-8">
          Tecnico en Ingenieria de Software residente en Perú. Me especializo en el Desarrollo Web Full-Stack, siempre buscando la oportunidad de aprender y aplicar mis conocimientos adquiridos.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {socialData.map((item, index) => (
            <button
              key={index}
              className="text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-400 p-2 rounded-full transition-colors"
            >
              <a href={item.link} target="_blank">
                {iconsMap[item.name]}
                <span className="sr-only">{item.label}</span>
              </a>
            </button>
          ))}
        </div>
        <button className="bg-cyan-500 text-slate-900 hover:bg-cyan-600 px-4 py-2 rounded-lg transition-colors"
          onClick={(e) => {
            e.stopPropagation()
            window.open(cvUrl, "_blank")
          }}>
          Ver CV
        </button>
      </div>
    </section>
  );
};
