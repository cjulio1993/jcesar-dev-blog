import type { APIContext } from 'astro';
import { buildFeed } from '@/utils/rss';

export const GET = ({ site }: APIContext) => buildFeed('pt-br', site!);
