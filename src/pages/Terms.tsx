import { useTranslation } from 'react-i18next'

const PURPLE = '#7C6CFF'
const PURPLE_LIGHT = '#F5F3FF'
const PURPLE_BORDER = '#E5E0FF'

export default function Terms() {
  const { i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
        borderBottom: '1px solid #E5E0FF',
        padding: '80px 24px 48px',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', border: `1px solid ${PURPLE_BORDER}`,
            borderRadius: 999, padding: '5px 14px', marginBottom: 20,
            fontSize: 13, fontWeight: 600, color: PURPLE,
          }}>
            📄 {isEs ? 'Términos' : 'Terms'}
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 800, color: '#111827', margin: '0 0 10px', letterSpacing: '-0.5px', lineHeight: 1.15 }}>
            {isEs ? 'Términos y condiciones' : 'Terms of Service'}
          </h1>
          <p style={{ fontSize: 15, color: '#6B7280', margin: '0 0 16px' }}>
            {isEs ? 'Última actualización: marzo 2026' : 'Last updated: March 2026'}
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, maxWidth: 620, margin: 0 }}>
            {isEs
              ? 'Al descargar, instalar o usar Volvé, aceptás estos términos y condiciones. Leelos con atención antes de utilizar la aplicación.'
              : 'By downloading, installing, or using Volvé, you agree to these terms and conditions. Please read them carefully before using the application.'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '52px 24px 80px' }}>
        {isEs ? <TermsEs /> : <TermsEn />}
      </div>
    </div>
  )
}

// ── Sección reutilizable ─────────────────────────────────────────

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
        <div style={{
          flexShrink: 0, width: 32, height: 32, borderRadius: 8,
          background: PURPLE_LIGHT, border: `1px solid ${PURPLE_BORDER}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700, color: PURPLE, marginTop: 2,
        }}>
          {num}
        </div>
        <h2 style={{ fontSize: 19, fontWeight: 700, color: '#111827', margin: 0, lineHeight: 1.3 }}>
          {title}
        </h2>
      </div>
      <div style={{ paddingLeft: 46 }}>
        {children}
      </div>
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 12px' }}>
      {children}
    </p>
  )
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: '8px 0 12px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#374151', lineHeight: 1.65 }}>
          <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Warning({ text }: { text: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', gap: 12, alignItems: 'flex-start',
      background: '#FFF7ED', border: '1px solid #FED7AA',
      borderRadius: 12, padding: '14px 16px', margin: '14px 0',
    }}>
      <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
      <p style={{ fontSize: 14, color: '#92400E', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>{text}</p>
    </div>
  )
}

function Callout({ icon, text }: { icon: string; text: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', gap: 12, alignItems: 'flex-start',
      background: PURPLE_LIGHT, border: `1px solid ${PURPLE_BORDER}`,
      borderRadius: 12, padding: '14px 16px', margin: '14px 0',
    }}>
      <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: 0 }}>{text}</p>
    </div>
  )
}

// ── Español ──────────────────────────────────────────────────────

function TermsEs() {
  return (
    <div>
      <Section num="1" title="Descripción del servicio">
        <P>Volvé es una herramienta de seguridad personal para iOS que permite:</P>
        <UL items={[
          'Configurar sesiones de seguimiento con información de la persona con quien te reunís.',
          'Definir un temporizador: si no desactivás la alarma a tiempo, se envían alertas automáticas a tus contactos de emergencia.',
          'Compartir tu ubicación en tiempo real durante una sesión activa.',
          'Usar un código de coacción que simula una desactivación normal pero alerta silenciosamente a tus contactos.',
          'Activar un botón de pánico para alertar de forma inmediata.',
        ]} />
        <Warning text={<><strong>IMPORTANTE: Volvé NO es un servicio de emergencias.</strong> No reemplaza al 911, 112 ni a ningún organismo oficial de seguridad. En situaciones de peligro inmediato, llamá al número de emergencias de tu país. El envío de alertas depende de la conectividad del dispositivo y de los servicios de terceros (Twilio, SendGrid); no podemos garantizar la entrega en todos los casos.</>} />
      </Section>

      <Section num="2" title="Elegibilidad">
        <P>Para usar Volvé debés:</P>
        <UL items={[
          'Tener al menos 13 años de edad.',
          'Proporcionar información de registro veraz y actualizada.',
          'Tener un dispositivo iOS compatible y conexión a internet.',
        ]} />
        <P>Si usás la app en nombre de otra persona o entidad, declarás que tenés autorización para aceptar estos términos en su nombre.</P>
      </Section>

      <Section num="3" title="Cuenta y códigos de seguridad">
        <P>Sos responsable de:</P>
        <UL items={[
          'Mantener la confidencialidad de tu contraseña y no compartirla con terceros.',
          'Recordar o guardar de forma segura tu código seguro y código de coacción. Volvé no puede recuperarlos: están almacenados únicamente en el Keychain de tu dispositivo.',
          'Notificar de inmediato a soporte@volve-app.com si sospechás que tu cuenta fue comprometida.',
        ]} />
        <Callout icon="🔑" text="Si perdés acceso a tu dispositivo o borrás la app sin eliminar la cuenta, los códigos de seguridad se pierden permanentemente. Configurarlos nuevamente requiere crear una nueva cuenta o reinstalar la app." />
      </Section>

      <Section num="4" title="Uso aceptable">
        <P>Queda <strong>estrictamente prohibido</strong> usar Volvé para:</P>
        <UL items={[
          'Enviar alertas falsas de forma deliberada.',
          'Suplantar la identidad de otra persona.',
          'Agregar contactos de emergencia sin el consentimiento de esa persona.',
          'Realizar cualquier actividad contraria a las leyes vigentes en tu país.',
          'Intentar acceder a las cuentas o datos de otros usuarios.',
          'Usar la app para hostigar, intimidar o dañar a terceros.',
        ]} />
        <P>Volvé se reserva el derecho de suspender o eliminar cuentas que violen estas condiciones, sin previo aviso y sin reembolso.</P>
      </Section>

      <Section num="5" title="Contactos de emergencia">
        <P>Al agregar un contacto de emergencia, declarás que:</P>
        <UL items={[
          'Tenés el consentimiento de esa persona para recibirá mensajes de alerta en tu nombre.',
          'El número de teléfono y email que ingresás son correctos y pertenecen a esa persona.',
          'Esa persona entiende que puede recibir mensajes de emergencia de tu parte en cualquier momento.',
        ]} />
        <P>Volvé no verifica la identidad ni el consentimiento de los contactos. La responsabilidad de obtener ese consentimiento es tuya.</P>
      </Section>

      <Section num="6" title="Propiedad intelectual">
        <P>Volvé y todo su contenido (diseño, código, marca, textos, imágenes) son propiedad de Diego Maidana. No podés copiar, modificar, distribuir ni crear obras derivadas sin autorización escrita expresa.</P>
        <P>Al subir fotos o contenido a la app (fotos de contactos, de sesiones), mantenés la propiedad de ese contenido y nos otorgás una licencia limitada para almacenarlo y enviarlo en el contexto de las alertas de emergencia.</P>
      </Section>

      <Section num="7" title="Limitación de responsabilidad">
        <P>En la máxima medida permitida por la ley:</P>
        <UL items={[
          'Volvé se provee "tal como está", sin garantías de ningún tipo.',
          'No somos responsables por daños directos, indirectos o incidentales derivados del uso o la imposibilidad de uso de la app.',
          'No garantizamos que las alertas se entreguen en todos los casos ni en un tiempo determinado.',
          'No somos responsables por las acciones u omisiones de Twilio, SendGrid, Firebase ni otros terceros.',
        ]} />
        <Warning text="Si estás en una situación de riesgo real, no dependas exclusivamente de Volvé. Llamá al 911 o al número de emergencias de tu país." />
      </Section>

      <Section num="8" title="Eliminación de cuenta">
        <P>Podés eliminar tu cuenta y todos tus datos en cualquier momento desde <strong>Configuración → Eliminar cuenta</strong>. La eliminación es permanente e irreversible.</P>
        <P>Una vez eliminada la cuenta, no podemos recuperar ningún dato asociado a ella.</P>
      </Section>

      <Section num="9" title="Modificaciones">
        <P>Podemos modificar estos términos en cualquier momento. Los cambios significativos se notificarán dentro de la app. El uso continuado de Volvé después de la publicación de cambios implica la aceptación de los nuevos términos.</P>
      </Section>

      <Section num="10" title="Legislación aplicable">
        <P>Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa se resolverá ante los tribunales competentes de la Ciudad Autónoma de Buenos Aires.</P>
      </Section>

      <Section num="11" title="Contacto">
        <P>Para consultas sobre estos términos:</P>
        <P>📧 <a href="mailto:soporte@volve-app.com" style={{ color: PURPLE, fontWeight: 600, textDecoration: 'none' }}>soporte@volve-app.com</a></P>
      </Section>
    </div>
  )
}

// ── English ──────────────────────────────────────────────────────

function TermsEn() {
  return (
    <div>
      <Section num="1" title="Service description">
        <P>Volvé is a personal safety tool for iOS that allows you to:</P>
        <UL items={[
          'Set up tracking sessions with information about who you\'re meeting.',
          'Define a timer: if you don\'t deactivate the alarm in time, automatic alerts are sent to your emergency contacts.',
          'Share your real-time location during an active session.',
          'Use a duress code that simulates a normal deactivation but silently alerts your contacts.',
          'Activate a panic button to alert immediately.',
        ]} />
        <Warning text={<><strong>IMPORTANT: Volvé is NOT an emergency service.</strong> It does not replace 911, 112, or any official safety service. In situations of immediate danger, call your country's emergency number. Alert delivery depends on device connectivity and third-party services (Twilio, SendGrid); we cannot guarantee delivery in all cases.</>} />
      </Section>

      <Section num="2" title="Eligibility">
        <P>To use Volvé you must:</P>
        <UL items={[
          'Be at least 13 years of age.',
          'Provide accurate and up-to-date registration information.',
          'Have a compatible iOS device and internet connection.',
        ]} />
        <P>If you use the app on behalf of another person or entity, you represent that you have the authority to accept these terms on their behalf.</P>
      </Section>

      <Section num="3" title="Account and safety codes">
        <P>You are responsible for:</P>
        <UL items={[
          'Maintaining the confidentiality of your password and not sharing it with third parties.',
          'Remembering or securely storing your safe code and duress code. Volvé cannot recover them: they are stored only in your device\'s Keychain.',
          'Immediately notifying soporte@volve-app.com if you suspect your account has been compromised.',
        ]} />
        <Callout icon="🔑" text="If you lose access to your device or delete the app without deleting the account, the safety codes are permanently lost. Setting them up again requires creating a new account or reinstalling the app." />
      </Section>

      <Section num="4" title="Acceptable use">
        <P>It is <strong>strictly prohibited</strong> to use Volvé to:</P>
        <UL items={[
          'Deliberately send false alerts.',
          'Impersonate another person.',
          'Add emergency contacts without that person\'s consent.',
          'Engage in any activity contrary to applicable laws in your country.',
          'Attempt to access other users\' accounts or data.',
          'Use the app to harass, intimidate, or harm third parties.',
        ]} />
        <P>Volvé reserves the right to suspend or delete accounts that violate these conditions, without prior notice and without refund.</P>
      </Section>

      <Section num="5" title="Emergency contacts">
        <P>By adding an emergency contact, you represent that:</P>
        <UL items={[
          'You have that person\'s consent to receive emergency alerts on your behalf.',
          'The phone number and email you enter are correct and belong to that person.',
          'That person understands they may receive emergency messages from you at any time.',
        ]} />
        <P>Volvé does not verify the identity or consent of contacts. Obtaining that consent is your responsibility.</P>
      </Section>

      <Section num="6" title="Intellectual property">
        <P>Volvé and all its content (design, code, brand, text, images) are the property of Diego Maidana. You may not copy, modify, distribute, or create derivative works without express written authorization.</P>
        <P>When you upload photos or content to the app (contact photos, session photos), you retain ownership of that content and grant us a limited license to store and send it in the context of emergency alerts.</P>
      </Section>

      <Section num="7" title="Limitation of liability">
        <P>To the maximum extent permitted by law:</P>
        <UL items={[
          'Volvé is provided "as is", without warranties of any kind.',
          'We are not liable for direct, indirect, or incidental damages arising from the use or inability to use the app.',
          'We do not guarantee that alerts will be delivered in all cases or within any specific time.',
          'We are not responsible for the actions or omissions of Twilio, SendGrid, Firebase, or other third parties.',
        ]} />
        <Warning text="If you are in a real risk situation, do not rely exclusively on Volvé. Call 911 or your country's emergency number." />
      </Section>

      <Section num="8" title="Account deletion">
        <P>You can delete your account and all your data at any time from <strong>Settings → Delete account</strong>. Deletion is permanent and irreversible.</P>
        <P>Once the account is deleted, we cannot recover any data associated with it.</P>
      </Section>

      <Section num="9" title="Modifications">
        <P>We may modify these terms at any time. Significant changes will be notified within the app. Continued use of Volvé after changes are published constitutes acceptance of the new terms.</P>
      </Section>

      <Section num="10" title="Governing law">
        <P>These terms are governed by the laws of the Argentine Republic. Any dispute will be resolved before the competent courts of the Autonomous City of Buenos Aires.</P>
      </Section>

      <Section num="11" title="Contact">
        <P>For inquiries about these terms:</P>
        <P>📧 <a href="mailto:soporte@volve-app.com" style={{ color: PURPLE, fontWeight: 600, textDecoration: 'none' }}>soporte@volve-app.com</a></P>
      </Section>
    </div>
  )
}
