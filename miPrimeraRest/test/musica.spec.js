import request from 'supertest';
import servidor from '../src'
import mocks from '../mock';

describe('Musica', () => {

    let instance = undefined;

    beforeEach(() => {
        instance = servidor.start();
    });
    afterEach(() => {
        servidor.close();
        instance = undefined;
    });

    describe('/GET /musica', () => {
        it('it should GET', () => {            
            request(instance)
                .get('/musica')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((error, res) => {
                    if (error) throw err
                });
        });
    });

    describe('/GET /musica/Foyone', () => {
        it('it should GET', () => {
            const expected = mocks.filter(item =>
                item.cantante.toLowerCase() === 'Foyone'.toLowerCase()
            );
            request(instance)
                .get('/musica/foyone')
                .expect('Content-Type', /json/)
                .expect(200, expected)
                .end((error, res) => {
                    if (error) throw err
                });
        });
    });
})
