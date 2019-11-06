-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 06-11-2019 a las 17:14:16
-- Versión del servidor: 5.7.23-23
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kioskodi_kioskodigital`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivosadj`
--

CREATE TABLE `archivosadj` (
  `archivosadj_ID` int(11) NOT NULL,
  `archivosadj_nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dependencias`
--

CREATE TABLE `dependencias` (
  `dependencias_ID` int(11) NOT NULL,
  `dependencias_nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `dependencias`
--

INSERT INTO `dependencias` (`dependencias_ID`, `dependencias_nombre`) VALUES
(1, 'Coordinación General Pública'),
(2, 'Secretaria de Finanzas'),
(3, 'Secretaría de Agua y Medio Ambiente'),
(4, 'Presidencia Municipal de Sombrerete'),
(5, 'Fiscalía General de Justicia'),
(6, 'Presidencia Municipal de Zacatecas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentos`
--

CREATE TABLE `documentos` (
  `documentos_ID` int(11) NOT NULL,
  `documentos_nombre` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `documentos`
--

INSERT INTO `documentos` (`documentos_ID`, `documentos_nombre`) VALUES
(1, 'Acta de Nacimiento'),
(2, 'Forma migratoria única (fm2)'),
(3, 'Forma migratoria única (fm3)'),
(4, 'Forma migratoria única (fmm)'),
(5, 'Carta de Naturalización'),
(6, 'Credencial de Elector'),
(7, 'Recibos Originales'),
(8, 'Carta Solicitud (Formato Libre)'),
(9, 'Carta Solicitud dirigida a la Secretaría de Agua y Medio Ambiente'),
(10, 'Licencia de funcionamiento expedida por la Dirección de Desarrollo Económico'),
(11, 'Comprobante de domicilio'),
(12, 'Documentación que acredite responsabilidad del Servidor Público'),
(13, 'Teléfono'),
(14, 'CURP'),
(15, 'RFC');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solAdj`
--

CREATE TABLE `solAdj` (
  `sol-adj_ID` int(11) NOT NULL,
  `sol-adj_solicitud` int(11) NOT NULL,
  `sol-adj_archivo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `solicitudes_ID` int(11) NOT NULL,
  `solicitudes_tramite` int(11) NOT NULL,
  `solicitudes_estado` varchar(20) NOT NULL,
  `solicitudes_nAdjuntos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tramDocs`
--

CREATE TABLE `tramDocs` (
  `tram-docs_ID` int(11) NOT NULL,
  `tram-docs_tramite` int(11) NOT NULL,
  `tram-docs_documento` int(11) NOT NULL,
  `tram_docs_required` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tramDocs`
--

INSERT INTO `tramDocs` (`tram-docs_ID`, `tram-docs_tramite`, `tram-docs_documento`, `tram_docs_required`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 0),
(3, 1, 3, 0),
(4, 1, 4, 0),
(5, 1, 5, 0),
(6, 2, 8, 1),
(7, 3, 7, 1),
(8, 3, 8, 1),
(9, 2, 6, 1),
(10, 4, 9, 1),
(11, 5, 8, 1),
(12, 6, 6, 1),
(13, 6, 10, 1),
(14, 6, 11, 1),
(15, 7, 6, 1),
(16, 8, 6, 1),
(17, 8, 12, 1),
(18, 9, 6, 1),
(19, 10, 14, 1),
(20, 10, 6, 1),
(21, 10, 11, 1),
(22, 10, 13, 1),
(23, 10, 15, 1),
(24, 11, 6, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tramites`
--

CREATE TABLE `tramites` (
  `tramites_ID` int(11) NOT NULL,
  `tramites_link` varchar(200) DEFAULT NULL,
  `tramites_nombre` varchar(200) NOT NULL,
  `tramites_dependencia` int(11) NOT NULL,
  `tramites_nDocumentos` int(11) NOT NULL,
  `tramites_costo` double NOT NULL,
  `tramites_duracion` varchar(20) NOT NULL,
  `tramites_nEtiquetas` int(11) NOT NULL,
  `tramites_etiqueta1` varchar(20) NOT NULL,
  `tramites_etiqueta2` varchar(20) DEFAULT NULL,
  `tramites_etiqueta3` varchar(20) DEFAULT NULL,
  `tramites_etiqueta4` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tramites`
--

INSERT INTO `tramites` (`tramites_ID`, `tramites_link`, `tramites_nombre`, `tramites_dependencia`, `tramites_nDocumentos`, `tramites_costo`, `tramites_duracion`, `tramites_nEtiquetas`, `tramites_etiqueta1`, `tramites_etiqueta2`, `tramites_etiqueta3`, `tramites_etiqueta4`) VALUES
(1, NULL, 'Expedición de CURP', 1, 5, 0, '10', 2, 'CURP', 'Expedición', NULL, NULL),
(2, NULL, 'Expedición de Copias Certificadas', 1, 2, 83, '1', 3, 'Copia', 'Certificación', 'Certificada', NULL),
(3, NULL, 'Devolución por Pago Indebido o Duplicidad', 2, 2, 0, '15', 4, 'Reembolso', 'Pago', 'Duplicado', 'Indebido'),
(4, NULL, 'Solicitud de Árboles', 3, 1, 0, '30', 3, 'Árboles', 'Solicitud', 'Árbol', NULL),
(5, NULL, 'Posesión Legal de Predio', 3, 1, 0, '10', 4, 'Predio', 'Posesión', 'Legal', 'Agua'),
(6, NULL, 'Verificación y Validación de Locales para Venta de Alcohol', 4, 3, 0, '3', 4, 'Alcohol', 'Venta', 'Permiso', 'Público'),
(7, NULL, 'Reparación de Lámparas', 4, 1, 0, '8', 4, 'Reparación', 'Lámparas', 'Alumbrado', 'Público'),
(8, NULL, 'Denuncia en coontra de Servidor Público', 5, 2, 0, '0', 4, 'Denuncia', 'Servidor', 'Público', 'Queja'),
(9, NULL, 'Atención a Víctimas del Delito', 5, 1, 0, '0.1', 4, 'Delito', 'Víctimas', 'Atención', 'Denuncia'),
(10, NULL, 'Apoyos', 6, 5, 0, '15', 3, 'Apoyo', 'Económico', 'Ayuda', NULL),
(11, NULL, 'Licencia para Construcción', 6, 1, 0, '8', 3, 'Construcción', 'Licencia', 'Permiso', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuarios_ID` int(11) NOT NULL,
  `usuarios_nombre` varchar(200) NOT NULL,
  `usuarios_dependencia` int(11) NOT NULL,
  `usuarios_usuario` varchar(15) NOT NULL,
  `usuarios_password` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivosadj`
--
ALTER TABLE `archivosadj`
  ADD PRIMARY KEY (`archivosadj_ID`);

--
-- Indices de la tabla `dependencias`
--
ALTER TABLE `dependencias`
  ADD PRIMARY KEY (`dependencias_ID`);

--
-- Indices de la tabla `documentos`
--
ALTER TABLE `documentos`
  ADD PRIMARY KEY (`documentos_ID`);

--
-- Indices de la tabla `solAdj`
--
ALTER TABLE `solAdj`
  ADD PRIMARY KEY (`sol-adj_ID`),
  ADD KEY `sol-adj_solicitud` (`sol-adj_solicitud`),
  ADD KEY `sol-adj_archivo` (`sol-adj_archivo`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`solicitudes_ID`),
  ADD KEY `solicitudes_tramite` (`solicitudes_tramite`),
  ADD KEY `solicitudes_nArchivos` (`solicitudes_nAdjuntos`);

--
-- Indices de la tabla `tramDocs`
--
ALTER TABLE `tramDocs`
  ADD PRIMARY KEY (`tram-docs_ID`),
  ADD KEY `tram-docs_tramite` (`tram-docs_tramite`),
  ADD KEY `tram-docs_documento` (`tram-docs_documento`);

--
-- Indices de la tabla `tramites`
--
ALTER TABLE `tramites`
  ADD PRIMARY KEY (`tramites_ID`),
  ADD KEY `tramites_dependencia` (`tramites_dependencia`),
  ADD KEY `tramites_nDocumentos` (`tramites_nDocumentos`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuarios_ID`),
  ADD KEY `usuarios_dependencia` (`usuarios_dependencia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tramites`
--
ALTER TABLE `tramites`
  MODIFY `tramites_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `solAdj`
--
ALTER TABLE `solAdj`
  ADD CONSTRAINT `solAdj_ibfk_1` FOREIGN KEY (`sol-adj_solicitud`) REFERENCES `solicitudes` (`solicitudes_ID`),
  ADD CONSTRAINT `solAdj_ibfk_2` FOREIGN KEY (`sol-adj_archivo`) REFERENCES `archivosadj` (`archivosadj_ID`);

--
-- Filtros para la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`solicitudes_tramite`) REFERENCES `tramites` (`tramites_ID`);

--
-- Filtros para la tabla `tramDocs`
--
ALTER TABLE `tramDocs`
  ADD CONSTRAINT `tramDocs_ibfk_1` FOREIGN KEY (`tram-docs_documento`) REFERENCES `documentos` (`documentos_ID`),
  ADD CONSTRAINT `tramDocs_ibfk_2` FOREIGN KEY (`tram-docs_tramite`) REFERENCES `tramites` (`tramites_ID`);

--
-- Filtros para la tabla `tramites`
--
ALTER TABLE `tramites`
  ADD CONSTRAINT `tramites_ibfk_1` FOREIGN KEY (`tramites_dependencia`) REFERENCES `dependencias` (`dependencias_ID`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`usuarios_dependencia`) REFERENCES `dependencias` (`dependencias_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
