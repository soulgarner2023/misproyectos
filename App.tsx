import React from 'react';

// Helper component for standard cells to ensure consistent styling.
// Defined outside the App component to prevent re-creation on re-renders.
interface CellProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

const Cell: React.FC<CellProps> = ({ children, className = '', colSpan, rowSpan }) => (
  <td className={`border border-slate-400 p-2 align-top text-slate-700 ${className}`} colSpan={colSpan} rowSpan={rowSpan}>
    {children}
  </td>
);

// Helper for header cells (bold text).
const HeaderCell: React.FC<CellProps> = ({ children, className = '', colSpan, rowSpan }) => (
  <Cell className={`font-bold bg-slate-50 text-slate-800 ${className}`} colSpan={colSpan} rowSpan={rowSpan}>
    {children}
  </Cell>
);

// Helper for main section title rows (colored background).
const TitleRow: React.FC<{ children: React.ReactNode; colSpan?: number }> = ({ children, colSpan = 9 }) => (
  <tr>
    <HeaderCell className="bg-[#B7DEE8] text-center text-slate-900 tracking-wide" colSpan={colSpan}>
      {children}
    </HeaderCell>
  </tr>
);

const App: React.FC = () => {
  return (
    <main className="bg-slate-200 min-h-screen p-4 sm:p-8 flex justify-center items-start">
      <div className="bg-white shadow-2xl rounded-lg p-6 sm:p-8 w-full max-w-7xl">
        <table className="w-full border-collapse text-sm">
          <colgroup>
            <col style={{ width: '11.11%' }} />
            <col style={{ width: '11.11%' }} />
            <col style={{ width: '11.11%' }} />
            <col style={{ width: '11.11%' }} />
            <col style={{ width: '11.11%' }} />
            <col style={{ width: '11.11%' }} />
            <col style={{ width: '11.11%' }} />
            <col style={{ width: '11.11%' }} />
            <col style={{ width: '11.11%' }} />
          </colgroup>
          <tbody>
            {/* Fila 1: Titulo Principal */}
            <tr>
              <HeaderCell colSpan={9} className="text-center text-xl bg-slate-700 text-white p-3">
                SESIÓN DE APRENDIZAJE
              </HeaderCell>
            </tr>
            
            {/* Fila 2: Información General */}
            <tr>
              <HeaderCell>Área</HeaderCell>
              <Cell colSpan={2}>Informática</Cell>
              <HeaderCell>Grado</HeaderCell>
              <Cell>2 Sec</Cell>
              <HeaderCell>Secciones</HeaderCell>
              <Cell>ABCD</Cell>
              <HeaderCell>Profesores</HeaderCell>
              <Cell colSpan={2}>Nelly Medina</Cell>
            </tr>

            {/* Fila 3 y 4: Duración, Unidad, etc. */}
            <tr>
              <HeaderCell rowSpan={2}>Duración</HeaderCell>
              <Cell colSpan={2} className="text-center font-semibold">1 Hora Pedagógica</Cell>
              <HeaderCell colSpan={2}>Unidad de Proyecto</HeaderCell>
              <Cell className="text-center font-semibold">2</Cell>
              <HeaderCell>Nro de Sesión</HeaderCell>
              <Cell colSpan={2} className="text-center font-semibold">6</Cell>
            </tr>
             <tr>
                <td colSpan={8} className="p-1 border-0"></td>
            </tr>

            {/* Sección I: Título de la Sesión */}
            <TitleRow>I. TÍTULO DE LA SESIÓN</TitleRow>
            <tr>
              <Cell colSpan={9} className="h-10 text-lg font-semibold text-center italic text-slate-500">
                [Espacio para ingresar el título de la sesión]
              </Cell>
            </tr>
            <tr><td colSpan={9} className="p-2 border-0"></td></tr>

            {/* Sección II: Propósitos y Evidencias */}
            <TitleRow>II. PROPÓSITOS Y EVIDENCIAS DE APRENDIZAJE</TitleRow>
            <tr>
              <HeaderCell colSpan={2} className="text-center">COMPETENCIA Y CAPACIDADES DEL ÁREA</HeaderCell>
              <HeaderCell colSpan={2} className="text-center">DESEMPEÑOS PRECISADOS</HeaderCell>
              <HeaderCell colSpan={2} className="text-center">CRITERIOS DE EVALUACIÓN</HeaderCell>
              <HeaderCell colSpan={2} className="text-center">EVIDENCIA</HeaderCell>
              <HeaderCell className="text-center">INSTRUMENTO DE EVALUACIÓN</HeaderCell>
            </tr>
            {[...Array(3)].map((_, i) => (
              <tr key={`evidence-row-${i}`} className="h-20">
                <Cell colSpan={2}>&nbsp;</Cell>
                <Cell colSpan={2}>&nbsp;</Cell>
                <Cell colSpan={2}>&nbsp;</Cell>
                <Cell colSpan={2}>&nbsp;</Cell>
                <Cell>&nbsp;</Cell>
              </tr>
            ))}
             <tr><td colSpan={9} className="p-2 border-0"></td></tr>

            {/* Sección: Valores */}
            <TitleRow>IMPERATIVOS DE LA CONGREGACIÓN</TitleRow>
            <tr className="text-center font-semibold">
              <Cell colSpan={9}>
                <div className="flex justify-around p-2">
                    <span>Corresponsabilidad</span>
                    <span>Colaboración</span>
                    <span>Integración</span>
                    <span>Transformación</span>
                </div>
              </Cell>
            </tr>
            <tr><td colSpan={9} className="p-2 border-0"></td></tr>

            {/* Sección III: Momentos de la Sesión */}
            <TitleRow>III. MOMENTOS DE LA SESIÓN 6</TitleRow>
            <tr>
              <HeaderCell className="text-center">MOMENTOS</HeaderCell>
              <HeaderCell colSpan={2} className="text-center">PROCESOS PEDAGÓGICOS</HeaderCell>
              <HeaderCell colSpan={4} className="text-center">ACTIVIDADES Y/O ESTRATEGIAS</HeaderCell>
              <HeaderCell className="text-center">RECURSOS</HeaderCell>
              <HeaderCell className="text-center">TIEMPO</HeaderCell>
            </tr>

            {/* INICIO */}
            <tr>
              <HeaderCell rowSpan={2}>INICIO</HeaderCell>
              <Cell colSpan={2}>Motivación, recojo de saberes previos y conflicto cognitivo.</Cell>
              <Cell colSpan={4}>Saludo y oración. Se presenta la situación significativa. Se recogen los saberes previos con una lluvia de ideas.</Cell>
              <Cell>Voz, Pizarra</Cell>
              <Cell className="text-center">10'</Cell>
            </tr>
            <tr>
              <Cell colSpan={2}>Propósito y organización.</Cell>
              <Cell colSpan={4}>Se presenta el título de la sesión y los propósitos de aprendizaje. Se establecen los acuerdos de convivencia.</Cell>
              <Cell>Voz</Cell>
              <Cell className="text-center">5'</Cell>
            </tr>

            {/* DESARROLLO */}
            <tr>
              <HeaderCell rowSpan={2}>DESARROLLO</HeaderCell>
              <Cell colSpan={2}>Gestión y acompañamiento del desarrollo de las competencias.</Cell>
              <Cell colSpan={4}>El docente modela la actividad principal. Los estudiantes aplican lo aprendido en un proyecto guiado, resolviendo dudas con el docente.</Cell>
              <Cell>PC, Proyector, Software</Cell>
              <Cell className="text-center">60'</Cell>
            </tr>
             <tr>
              <Cell colSpan={2}>Trabajo colaborativo.</Cell>
              <Cell colSpan={4}>Los estudiantes se organizan en equipos para desarrollar una parte del proyecto, fomentando la colaboración y el intercambio de ideas.</Cell>
              <Cell>Guía de trabajo</Cell>
              <Cell className="text-center">&nbsp;</Cell>
            </tr>

            {/* CIERRE */}
            <tr>
              <HeaderCell>CIERRE</HeaderCell>
              <Cell colSpan={2}>Evaluación.</Cell>
              <Cell colSpan={4}>Metacognición: ¿Qué aprendimos hoy? ¿Cómo lo aprendimos? ¿Para qué nos sirve? Se revisa el cumplimiento de los propósitos y acuerdos.</Cell>
              <Cell>Voz, Cuestionario</Cell>
              <Cell className="text-center">15'</Cell>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default App;
