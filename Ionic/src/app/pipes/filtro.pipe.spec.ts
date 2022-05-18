import { FiltroPipe } from './filtro.pipe';
//transformar la data sin modificar los varoles internos propios del arreglo
describe('FiltroPipe', () => {
  it('create an instance', () => {
    const pipe = new FiltroPipe();
    expect(pipe).toBeTruthy();
  });
});
