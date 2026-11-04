import type { APIContext } from 'astro';
import { buildFeed } from '@/utils/rss';

export const GET = ({ site }: APIContext) => buildFeed('es', site!);
