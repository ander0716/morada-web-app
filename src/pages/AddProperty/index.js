import { Page } from "../../components/Page";
import { FormControl, FormControlAction, FormControlInput, PageTitle } from '../../globalStyles'
import { Button } from '../../components/Button'

export const AddProperty = () => (
    <Page>
        <PageTitle>Agregar Propiedad</PageTitle>
        <br />
        <form>
            <FormControl>
                <FormControlInput>
                    <label>Ubicación</label>
                    <input type="text" autoFocus />
                </FormControlInput>
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Tipo de propiedad</label>
                    <select name="propiedades" id="properties">
                        <option value="0">Seleccione una propiedad:</option>
                        <option value="1">Casa</option>
                        <option value="2">Apartamento</option>
                        <option value="3">Apartaestudio</option>
                        <option value="4">Finca</option>
                        <option value="5">Lote</option>
                    </select>
                </FormControlInput>
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Estado de la propiedad</label>
                    <select name="estado" id="estadoProperty">
                        <option value="0">Seleccione un estado:</option>
                        <option value="1">Nuevo</option>
                        <option value="2">Usado</option>
                    </select>
                </FormControlInput>
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Valor</label>
                    <input type="number" />
                </FormControlInput>
            </FormControl>
            <br />
            <Button label={"Guardar"} onPress={() => alert('Ok')} />
            <br />
        </form>
    </Page>
)