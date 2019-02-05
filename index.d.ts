import { Source } from 'callbag';

export default function lazy<T>(f: () => T): Source<T>;
