'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

// Un archivo "use server" solo puede exportar funciones async: las constantes no se exportan
const THEMES = ['icesi', 'icesi-dark', 'icesi-contraste'] as const;

// Recorre los tres temas y lo recuerda en una cookie
export async function toggleThemeAction(): Promise<void> {
    const store = await cookies();
    const current = store.get('theme')?.value;
    const index = THEMES.indexOf(current as (typeof THEMES)[number]);
    const next = THEMES[(index + 1) % THEMES.length];

    store.set('theme', next, { path: '/', maxAge: 60 * 60 * 24 * 365 });
    revalidatePath('/', 'layout'); // vuelve a pintar toda la app con el tema nuevo
}