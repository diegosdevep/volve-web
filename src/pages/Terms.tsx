import { useTranslation } from 'react-i18next'

const PURPLE = '#6E6BB3'
const PURPLE_LIGHT = '#F5F3FF'
const PURPLE_BORDER = '#E5E0FF'

export default function Terms() {
  const { i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #F5F3FF 0%, #EAE9F4 100%)',
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
            {isEs ? 'Última actualización: mayo 2026' : 'Last updated: May 2026'}
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
        <Warning text={<><strong>IMPORTANTE: Volvé NO es un servicio de emergencias.</strong> No reemplaza al 911, 112 ni a ningún organismo oficial de seguridad. En situaciones de peligro inmediato, llamá al número de emergencias de tu país. El envío de alertas depende de la conectividad del dispositivo y de los servicios de terceros (Twilio, Resend); no podemos garantizar la entrega en todos los casos.</>} />
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
          'Tenés el consentimiento de esa persona para recibir mensajes de alerta en tu nombre.',
          'El número de teléfono y email que ingresás son correctos y pertenecen a esa persona.',
          'Esa persona entiende que puede recibir mensajes de emergencia de tu parte en cualquier momento.',
        ]} />
        <P>Volvé no verifica la identidad ni el consentimiento de los contactos. La responsabilidad de obtener ese consentimiento es tuya.</P>
      </Section>

      <Section num="6" title="Suscripción premium">
        <P>Volvé ofrece un plan gratuito con funcionalidad limitada y una suscripción premium mensual con funciones adicionales:</P>
        <UL items={[
          <><strong>Plan gratuito:</strong> 1 contacto de emergencia, 3 sesiones por mes, sin código de coacción ni extensiones de sesión.</>,
          <><strong>Plan premium:</strong> contactos y sesiones ilimitados, código de coacción, extensiones de sesión.</>,
        ]} />
        <P>La suscripción se renueva automáticamente cada mes a través de Apple (App Store). Podés cancelarla en cualquier momento desde <strong>Configuración de tu iPhone → Suscripciones</strong>. Las políticas de reembolso de Apple aplican a todas las compras.</P>
      </Section>

      <Section num="7" title="Enlace de seguimiento en vivo">
        <P>Al activarse una alerta, se genera un enlace de ubicación en tiempo real que se comparte con tus contactos de emergencia. Este enlace es accesible sin autenticación durante <strong>24 horas</strong>, después de las cuales expira automáticamente.</P>
        <P>Volvé no se responsabiliza por el reenvío de este enlace a terceros por parte de tus contactos de emergencia.</P>
      </Section>

      <Section num="8" title="Disponibilidad del servicio">
        <P>Volvé depende de servicios de terceros (Firebase, Twilio, Apple) y de la conectividad del dispositivo. No garantizamos disponibilidad ininterrumpida. Las interrupciones pueden ocurrir por mantenimiento, actualizaciones o factores fuera de nuestro control.</P>
      </Section>

      <Section num="9" title="Propiedad intelectual">
        <P>Volvé y todo su contenido (diseño, código, marca, textos, imágenes) son propiedad de Diego Maidana. No podés copiar, modificar, distribuir ni crear obras derivadas sin autorización escrita expresa.</P>
        <P>Al subir fotos o contenido a la app (fotos de contactos, de sesiones), mantenés la propiedad de ese contenido y nos otorgás una licencia limitada para almacenarlo y enviarlo en el contexto de las alertas de emergencia.</P>
      </Section>

      <Section num="10" title="Limitación de responsabilidad">
        <P>En la máxima medida permitida por la ley:</P>
        <UL items={[
          'Volvé se provee "tal como está", sin garantías de ningún tipo.',
          'No somos responsables por daños directos, indirectos o incidentales derivados del uso o la imposibilidad de uso de la app.',
          'No garantizamos que las alertas se entreguen en todos los casos ni en un tiempo determinado.',
          'No somos responsables por las acciones u omisiones de Twilio, Resend, Firebase ni otros terceros.',
        ]} />
        <Warning text="Si estás en una situación de riesgo real, no dependas exclusivamente de Volvé. Llamá al 911 o al número de emergencias de tu país." />
      </Section>

      <Section num="11" title="Eliminación de cuenta">
        <P>Podés eliminar tu cuenta y todos tus datos en cualquier momento desde <strong>Configuración → Eliminar cuenta</strong>. La eliminación es permanente e irreversible.</P>
        <P>Una vez eliminada la cuenta, no podemos recuperar ningún dato asociado a ella.</P>
      </Section>

      <Section num="12" title="Licencia de Apple">
        <P>Este acuerdo complementa (no reemplaza) los términos del Contrato de Licencia de Aplicaciones Estándar de Apple (<em>Standard Licensed Application End User License Agreement</em>).</P>
      </Section>

      <Section num="13" title="Modificaciones">
        <P>Podemos modificar estos términos en cualquier momento. Los cambios significativos se notificarán dentro de la app. El uso continuado de Volvé después de la publicación de cambios implica la aceptación de los nuevos términos.</P>
      </Section>

      <Section num="14" title="Legislación aplicable">
        <P>Estos términos se rigen por las leyes de la República Argentina.</P>
        <P>El foro de resolución de disputas se establece en la cláusula <strong>15. Arbitraje obligatorio</strong>.</P>
      </Section>

      <Section num="15" title="Arbitraje obligatorio">
        <P>Cualquier disputa derivada del uso de Volvé se resolverá mediante <strong>arbitraje vinculante</strong> en la Ciudad Autónoma de Buenos Aires, conforme al reglamento del <strong>Tribunal de Arbitraje General de la Bolsa de Comercio</strong>.</P>
        <P>Las partes renuncian expresamente al juicio público y a los recursos ordinarios contra el laudo arbitral.</P>
      </Section>

      <Section num="16" title="Renuncia a acción colectiva">
        <P>El usuario acepta resolver cualquier disputa con Volvé exclusivamente <strong>a título individual</strong>.</P>
        <P>Renuncia expresamente a participar en acciones de clase, colectivas, representativas o consolidadas contra Volvé.</P>
      </Section>

      <Section num="17" title="Límite máximo de responsabilidad">
        <P>En ningún caso la responsabilidad total de Volvé frente al usuario, por cualquier causa y bajo cualquier teoría legal, excederá el <strong>menor</strong> de los siguientes montos:</P>
        <UL items={[
          'El total pagado por el usuario a Volvé en los doce (12) meses anteriores al hecho que originó el reclamo.',
          <>Cien dólares estadounidenses (<strong>USD 100</strong>).</>,
        ]} />
      </Section>

      <Section num="18" title="Indemnización del usuario">
        <P>El usuario acepta indemnizar, defender y mantener indemne a Volvé y a Diego Maidana frente a cualquier reclamo, daño, pérdida o gasto (incluidos honorarios legales) derivados de:</P>
        <UL items={[
          'Información incorrecta, incompleta o falsa proporcionada por el usuario.',
          'Falta de consentimiento de los contactos de emergencia agregados por el usuario.',
          'Uso de la app contrario a estos términos o a las leyes vigentes.',
          'Reclamos de terceros relacionados con el contenido subido por el usuario.',
        ]} />
      </Section>

      <Section num="19" title="Plazo contractual para reclamos">
        <P>Cualquier reclamo o causa de acción del usuario contra Volvé deberá presentarse dentro de los <strong>seis (6) meses</strong> siguientes al hecho que la originó.</P>
        <P>Vencido ese plazo, la acción se considerará renunciada y prescripta a todos los efectos.</P>
      </Section>

      <Section num="20" title="Aceptación informada del riesgo">
        <P>El usuario reconoce y acepta expresamente que:</P>
        <UL items={[
          <>Volvé <strong>NO es un servicio de emergencias</strong> y no reemplaza al 911, 112 ni ningún organismo oficial.</>,
          'El funcionamiento de Volvé depende de servicios de terceros (Apple, Firebase, Twilio, Google, Vercel) y de la conectividad del dispositivo, sobre los que Volvé no tiene control total.',
          'La entrega de alertas no puede garantizarse en todos los casos.',
          <>El usuario <strong>NO debe confiar exclusivamente en Volvé</strong> para su seguridad personal y debe mantener canales alternativos de protección activos en todo momento.</>,
        ]} />
      </Section>

      <Section num="21" title="Contacto">
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
        <Warning text={<><strong>IMPORTANT: Volvé is NOT an emergency service.</strong> It does not replace 911, 112, or any official safety service. In situations of immediate danger, call your country's emergency number. Alert delivery depends on device connectivity and third-party services (Twilio, Resend); we cannot guarantee delivery in all cases.</>} />
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

      <Section num="6" title="Premium subscription">
        <P>Volvé offers a free plan with limited functionality and a monthly premium subscription with additional features:</P>
        <UL items={[
          <><strong>Free plan:</strong> 1 emergency contact, 3 sessions per month, no duress code or session extensions.</>,
          <><strong>Premium plan:</strong> unlimited contacts and sessions, duress code, session extensions.</>,
        ]} />
        <P>The subscription auto-renews monthly through Apple (App Store). You can cancel at any time from <strong>iPhone Settings → Subscriptions</strong>. Apple's refund policies apply to all purchases.</P>
      </Section>

      <Section num="7" title="Live tracking link">
        <P>When an alert is triggered, a real-time location link is generated and shared with your emergency contacts. This link is accessible without authentication for <strong>24 hours</strong>, after which it automatically expires.</P>
        <P>Volvé is not responsible for the forwarding of this link to third parties by your emergency contacts.</P>
      </Section>

      <Section num="8" title="Service availability">
        <P>Volvé depends on third-party services (Firebase, Twilio, Apple) and device connectivity. We do not guarantee uninterrupted availability. Interruptions may occur due to maintenance, updates, or factors beyond our control.</P>
      </Section>

      <Section num="9" title="Intellectual property">
        <P>Volvé and all its content (design, code, brand, text, images) are the property of Diego Maidana. You may not copy, modify, distribute, or create derivative works without express written authorization.</P>
        <P>When you upload photos or content to the app (contact photos, session photos), you retain ownership of that content and grant us a limited license to store and send it in the context of emergency alerts.</P>
      </Section>

      <Section num="10" title="Limitation of liability">
        <P>To the maximum extent permitted by law:</P>
        <UL items={[
          'Volvé is provided "as is", without warranties of any kind.',
          'We are not liable for direct, indirect, or incidental damages arising from the use or inability to use the app.',
          'We do not guarantee that alerts will be delivered in all cases or within any specific time.',
          'We are not responsible for the actions or omissions of Twilio, Resend, Firebase, or other third parties.',
        ]} />
        <Warning text="If you are in a real risk situation, do not rely exclusively on Volvé. Call 911 or your country's emergency number." />
      </Section>

      <Section num="11" title="Account deletion">
        <P>You can delete your account and all your data at any time from <strong>Settings → Delete account</strong>. Deletion is permanent and irreversible.</P>
        <P>Once the account is deleted, we cannot recover any data associated with it.</P>
      </Section>

      <Section num="12" title="Apple license">
        <P>This agreement supplements (does not replace) the terms of Apple's <em>Standard Licensed Application End User License Agreement</em>.</P>
      </Section>

      <Section num="13" title="Modifications">
        <P>We may modify these terms at any time. Significant changes will be notified within the app. Continued use of Volvé after changes are published constitutes acceptance of the new terms.</P>
      </Section>

      <Section num="14" title="Governing law">
        <P>These terms are governed by the laws of the Argentine Republic.</P>
        <P>The dispute resolution forum is established in clause <strong>15. Binding arbitration</strong>.</P>
      </Section>

      <Section num="15" title="Binding arbitration">
        <P>Any dispute arising from the use of Volvé will be resolved through <strong>binding arbitration</strong> in the Autonomous City of Buenos Aires, in accordance with the rules of the <strong>General Arbitration Tribunal of the Buenos Aires Stock Exchange</strong> (<em>Tribunal de Arbitraje General de la Bolsa de Comercio</em>).</P>
        <P>The parties expressly waive their right to a public trial and to ordinary remedies against the arbitral award.</P>
      </Section>

      <Section num="16" title="Class action waiver">
        <P>The user agrees to resolve any dispute with Volvé <strong>exclusively on an individual basis</strong>.</P>
        <P>The user expressly waives the right to participate in class, collective, representative, or consolidated actions against Volvé.</P>
      </Section>

      <Section num="17" title="Maximum liability cap">
        <P>In no event shall Volvé's total liability to the user, for any cause and under any legal theory, exceed the <strong>lesser</strong> of:</P>
        <UL items={[
          'The total amount paid by the user to Volvé during the twelve (12) months preceding the event giving rise to the claim.',
          <>One hundred United States dollars (<strong>USD 100</strong>).</>,
        ]} />
      </Section>

      <Section num="18" title="User indemnification">
        <P>The user agrees to indemnify, defend, and hold harmless Volvé and Diego Maidana from and against any claim, damage, loss, or expense (including legal fees) arising from:</P>
        <UL items={[
          'Incorrect, incomplete, or false information provided by the user.',
          'Lack of consent from emergency contacts added by the user.',
          'Use of the app contrary to these terms or applicable laws.',
          'Third-party claims related to content uploaded by the user.',
        ]} />
      </Section>

      <Section num="19" title="Contractual claim period">
        <P>Any claim or cause of action by the user against Volvé must be filed within <strong>six (6) months</strong> following the event giving rise to it.</P>
        <P>After that period, the action will be deemed waived and time-barred for all purposes.</P>
      </Section>

      <Section num="20" title="Informed acceptance of risk">
        <P>The user expressly acknowledges and accepts that:</P>
        <UL items={[
          <>Volvé is <strong>NOT an emergency service</strong> and does not replace 911, 112, or any official agency.</>,
          "Volvé's operation depends on third-party services (Apple, Firebase, Twilio, Google, Vercel) and on device connectivity, over which Volvé does not have full control.",
          'Alert delivery cannot be guaranteed in all cases.',
          <>The user <strong>must NOT rely exclusively on Volvé</strong> for personal safety and must keep alternative protection channels active at all times.</>,
        ]} />
      </Section>

      <Section num="21" title="Contact">
        <P>For inquiries about these terms:</P>
        <P>📧 <a href="mailto:soporte@volve-app.com" style={{ color: PURPLE, fontWeight: 600, textDecoration: 'none' }}>soporte@volve-app.com</a></P>
      </Section>
    </div>
  )
}
