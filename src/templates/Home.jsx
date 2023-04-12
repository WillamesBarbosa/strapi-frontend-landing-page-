import { BaseTemplate } from './BaseTemplate';
import { mockBase } from './BaseTemplate/stories';

export default function Home() {
  return <BaseTemplate {...mockBase} />;
}
