import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
import { EXPERIENCIA, FORMACION, PERFIL, PRACTICAS, PROYECTOS, STACK } from './perfil';

type Tema = 'claro' | 'oscuro';
const CLAVE_TEMA = 'eo-tema';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly documento = inject(DOCUMENT);
  private readonly navegador = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly perfil = PERFIL;
  protected readonly experiencia = EXPERIENCIA;
  protected readonly proyectos = PROYECTOS;
  protected readonly stack = STACK;
  protected readonly practicas = PRACTICAS;
  protected readonly formacion = FORMACION;
  protected readonly anios = new Date().getFullYear() - PERFIL.desde;
  protected readonly anioActual = new Date().getFullYear();

  /** null = sigue al sistema; sólo se guarda una elección explícita. */
  protected readonly tema = signal<Tema | null>(null);

  constructor() {
    afterNextRender(() => {
      const guardado = this.leer();
      if (guardado) this.aplicar(guardado);
    });
  }

  protected alternarTema(): void {
    const oscuroAhora =
      this.tema() === 'oscuro' ||
      (this.tema() === null && !!this.documento.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches);
    const nuevo: Tema = oscuroAhora ? 'claro' : 'oscuro';
    this.aplicar(nuevo);
    try {
      localStorage.setItem(CLAVE_TEMA, nuevo);
    } catch {
      /* sin almacenamiento: el tema dura lo que la visita */
    }
  }

  protected imprimir(): void {
    if (this.navegador) this.documento.defaultView?.print();
  }

  private aplicar(tema: Tema): void {
    this.tema.set(tema);
    this.documento.documentElement.dataset['theme'] = tema === 'oscuro' ? 'dark' : 'light';
  }

  private leer(): Tema | null {
    try {
      const v = localStorage.getItem(CLAVE_TEMA);
      return v === 'claro' || v === 'oscuro' ? v : null;
    } catch {
      return null;
    }
  }
}
