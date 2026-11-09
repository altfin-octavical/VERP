import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Landmark, LineChart, Mic, Play, Search, Youtube } from "lucide-react";

import heroImg from "@/assets/hero-tablero.jpg";
import esferaUrl from "@/assets/valor-efectivo-esfera.jpg";
import logoUrl from "@/assets/valor-efectivo-logo.jpg";
import portadaUrl from "@/assets/valor-efectivo-portada.jpg";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";

const CHANNEL_URL = "https://www.youtube.com/@valorefectivorp3998";
const PAYPAL_URL = "https://paypal.me/ValorefectivoRP";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valor efectivo – Realpolitik | Poder, capital y estrategia" },
      {
        name: "description",
        content:
          "Geofinanzas, geoeconomía y estrategia con Abel Ayala. Análisis del poder sin concesiones ideológicas. Contáctanos por WhatsApp.",
      },
      { property: "og:title", content: "Valor efectivo – Realpolitik | Poder, capital y estrategia" },
      {
        property: "og:description",
        content:
          "La política es la superficie; el capital es la estructura real. Análisis estratégico con Abel Ayala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pilares = [
  {
    icon: Landmark,
    title: "Realpolitik",
    text: "Analizamos los hechos sin concesiones ideológicas. Quién decide, quién paga y quién cobra en el tablero del poder.",
  },
  {
    icon: Compass,
    title: "Geoeconomía",
    text: "Identificamos las fuerzas que reconfiguran a las naciones: tratados, aranceles, alianzas y fracturas.",
  },
  {
    icon: LineChart,
    title: "Geofinanzas",
    text: "Proyectamos el impacto real en los mercados, los flujos del capital y la economía global y nacional: el destino final de tu dinero.",
  },
];

const videos = [
  { id: "r0jKJ1Z0SQw", title: "El fin del trilateralismo y la nueva realidad estratégica para México" },
  { id: "8RiEHjY06e8", title: "T-MEC al límite: ¿realmente es el fin del tratado trilateral?" },
  { id: "RPOAt_89Xcw", title: "La guerra de los comunicadores: quién paga y quién cobra en la 4T" },
  { id: "Xwm1s-3hRLA", title: "El colapso medible: los municipios perdidos" },
  { id: "qjFEq_RHagE", title: "El operativo en Chihuahua: ¿quién tenía atribuciones?" },
  { id: "FwSG93I0Cyg", title: "Qué sostuvo la FGR y cómo se construye la hipótesis política del supuesto pacto" },
];

const servicios = [
  {
    icon: Search,
    title: "Análisis a la medida",
    text: "Lectura estratégica del entorno político y económico para tu empresa, proyecto o inversión.",
    msg: "Hola Abel, me interesa un análisis estratégico a la medida.",
  },
  {
    icon: Mic,
    title: "Conferencias y entrevistas",
    text: "Participación en foros, medios, podcasts y mesas de análisis sobre poder, capital y prospectiva.",
    msg: "Hola Abel, quiero invitarte a una conferencia o entrevista.",
  },
  {
    icon: Play,
    title: "Colaboraciones en el canal",
    text: "Patrocinios y colaboraciones con una audiencia que busca entender hacia dónde va su dinero.",
    msg: "Hola Abel, me interesa una colaboración o patrocinio en el canal.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navegación */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-ink/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={esferaUrl} alt="" width={36} height={36} className="size-9 rounded-full" />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold">Valor efectivo</span>
              <span className="block font-mono text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase">
                Realpolitik
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#enfoque" className="transition-colors hover:text-foreground">Enfoque</a>
            <a href="#analisis" className="transition-colors hover:text-foreground">Análisis</a>
            <a href="#abel" className="transition-colors hover:text-foreground">Abel Ayala</a>
            <a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a>
          </nav>
          <Button asChild variant="whatsapp" size="sm">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
        <img
          src={heroImg}
          alt="Tablero de ajedrez con un mapa mundial iluminado"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="absolute inset-0 bg-fade-bottom" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 pb-20">
          <div className="max-w-2xl animate-rise">
            <p className="eyebrow">Geofinanzas · Geoeconomía · Estrategia</p>
            <h1 className="mt-6 text-5xl leading-[1.02] font-semibold sm:text-6xl lg:text-7xl">
              La política es la superficie.{" "}
              <em className="font-normal text-primary-glow">El capital es la estructura real.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Disección estratégica de la colisión entre el poder político y el poder económico,
              con Abel Ayala. Para que sepas qué está pasando en el tablero mundial y qué significa
              para tu dinero.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Escríbenos por WhatsApp
                </a>
              </Button>
              <Button asChild variant="line" size="xl">
                <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                  <Youtube className="size-5" />
                  Ver el canal
                </a>
              </Button>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
              <div>
                <dt className="eyebrow text-muted-foreground">Suscriptores</dt>
                <dd className="mt-1 font-display text-3xl font-semibold">2.1K+</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Análisis</dt>
                <dd className="mt-1 font-display text-3xl font-semibold">165+</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Desde</dt>
                <dd className="mt-1 font-display text-3xl font-semibold">2022</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Cita */}
      <section className="relative border-y border-border bg-ink py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-display text-3xl leading-snug font-normal italic sm:text-4xl lg:text-5xl">
            «Quien conoce el terreno y el movimiento del adversario,{" "}
            <span className="text-brass">domina el desenlace</span>».
          </p>
        </div>
      </section>

      {/* Enfoque */}
      <section id="enfoque" className="relative py-28 grid-lines">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <p className="eyebrow">El enfoque</p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                Análisis del poder en su estado puro.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Aquí la <span className="text-foreground">estrategia</span> es el método y la{" "}
              <span className="text-foreground">prospectiva</span> es el objetivo. Tres lentes para
              leer lo que otros solo comentan.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {pilares.map((p, i) => (
              <article key={p.title} className="group bg-background p-10 transition-colors hover:bg-card">
                <div className="flex items-center justify-between">
                  <p.icon className="size-7 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-10 text-3xl font-semibold">{p.title}</h3>
                <p className="mt-4 text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center font-mono text-sm tracking-[0.4em] text-brass uppercase">
            Poder · Capital · Estrategia · Valor efectivo
          </p>
        </div>
      </section>

      {/* Análisis recientes */}
      <section id="analisis" className="bg-ink py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">En el tablero</p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Análisis recientes</h2>
            </div>
            <Button asChild variant="line">
              <a href={`${CHANNEL_URL}/videos`} target="_blank" rel="noopener noreferrer">
                Todos los videos <ArrowUpRight />
              </a>
            </Button>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden rounded-sm border border-border">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    width={480}
                    height={360}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/30 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Play className="size-6 fill-current" />
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 font-sans text-base leading-snug font-medium tracking-normal transition-colors group-hover:text-primary">
                  {v.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Abel Ayala */}
      <section id="abel" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <img
            src={portadaUrl}
            alt="Portada del canal Valor efectivo RP con Abel Ayala"
            loading="lazy"
            width={2048}
            height={339}
            className="w-full rounded-sm border border-border"
          />
          <div className="mt-16 grid gap-12 lg:grid-cols-[auto_1fr] lg:items-center">
            <img
              src={logoUrl}
              alt="Logotipo de Valor efectivo Realpolitik"
              loading="lazy"
              width={900}
              height={900}
              className="size-56 rounded-full border border-border shadow-glow"
            />
            <div>
              <p className="eyebrow">Con Abel Ayala</p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Creciendo tu valor.</h2>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Desde México, Valor efectivo – Realpolitik revela las fuerzas detrás de cada noticia:
                tratados comerciales, reacomodos de partidos, decisiones de gobierno y sus efectos en
                los mercados. Un espacio para quien prefiere entender antes que opinar.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <a href={`${CHANNEL_URL}?sub_confirmation=1`} target="_blank" rel="noopener noreferrer">
                    <Youtube /> Suscríbete
                  </a>
                </Button>
                <Button asChild variant="line" size="lg">
                  <a href={PAYPAL_URL} target="_blank" rel="noopener noreferrer">
                    Apoya el canal <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative overflow-hidden border-t border-border bg-ink py-28">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[32rem] rounded-full bg-sphere opacity-20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Trabajemos juntos</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Lleva la estrategia a tu mesa.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Elige lo que necesitas y escríbenos directo por WhatsApp. Respuesta personal.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {servicios.map((s) => (
              <article key={s.title} className="flex flex-col rounded-sm border border-border bg-card p-8">
                <s.icon className="size-7 text-primary" />
                <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 flex-1 text-muted-foreground">{s.text}</p>
                <a
                  href={whatsappLink(s.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-whatsapp hover:underline"
                >
                  <WhatsAppIcon className="size-4" /> Consultar por WhatsApp
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-8 rounded-sm border border-whatsapp/40 bg-whatsapp/10 p-10 md:flex-row md:items-center">
            <div>
              <p className="eyebrow text-whatsapp">WhatsApp directo</p>
              <p className="mt-2 font-display text-4xl font-semibold">{WHATSAPP_DISPLAY}</p>
            </div>
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                Iniciar conversación
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pie */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={esferaUrl} alt="" width={28} height={28} className="size-7 rounded-full" loading="lazy" />
            <span>© {new Date().getFullYear()} Valor efectivo – Realpolitik</span>
          </div>
          <div className="flex gap-6">
            <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">YouTube</a>
            <a href={PAYPAL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">PayPal</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex size-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp animate-pulse-ring transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="size-8" />
      </a>
    </div>
  );
}
