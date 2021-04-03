﻿/*
Deployment script for 813A6347ED442EC5A21D019C7F6A1E72_SUAL STUDIO\PROJETO ENTREVISTA\TEST_CADASTRO_CLIENTE_C_AJS\CAD_CLIENTEAPP\APP_DATA\CLIENTES.MDF

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "813A6347ED442EC5A21D019C7F6A1E72_SUAL STUDIO\PROJETO ENTREVISTA\TEST_CADASTRO_CLIENTE_C_AJS\CAD_CLIENTEAPP\APP_DATA\CLIENTES.MDF"
:setvar DefaultFilePrefix "813A6347ED442EC5A21D019C7F6A1E72_SUAL STUDIO\PROJETO ENTREVISTA\TEST_CADASTRO_CLIENTE_C_AJS\CAD_CLIENTEAPP\APP_DATA\CLIENTES.MDF_"
:setvar DefaultDataPath "C:\Users\spiri\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"
:setvar DefaultLogPath "C:\Users\spiri\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO

IF (SELECT OBJECT_ID('tempdb..#tmpErrors')) IS NOT NULL DROP TABLE #tmpErrors
GO
CREATE TABLE #tmpErrors (Error int)
GO
SET XACT_ABORT ON
GO
SET TRANSACTION ISOLATION LEVEL READ COMMITTED
GO
BEGIN TRANSACTION
GO
PRINT N'Creating Table [dbo].[Cliente]...';


GO
CREATE TABLE [dbo].[Cliente] (
    [ClienteId]  INT            IDENTITY (1, 1) NOT NULL,
    [Nome]       NVARCHAR (50)  NULL,
    [CPF]        NVARCHAR (11)  NOT NULL,
    [Endereco]   NVARCHAR (200) NULL,
    [Telefone]   NVARCHAR (11)  NULL,
    [Observacao] NVARCHAR (200) NULL,
    PRIMARY KEY CLUSTERED ([ClienteId] ASC)
);


GO
IF @@ERROR <> 0
   AND @@TRANCOUNT > 0
    BEGIN
        ROLLBACK;
    END

IF @@TRANCOUNT = 0
    BEGIN
        INSERT  INTO #tmpErrors (Error)
        VALUES                 (1);
        BEGIN TRANSACTION;
    END


GO

IF EXISTS (SELECT * FROM #tmpErrors) ROLLBACK TRANSACTION
GO
IF @@TRANCOUNT>0 BEGIN
PRINT N'The transacted portion of the database update succeeded.'
COMMIT TRANSACTION
END
ELSE PRINT N'The transacted portion of the database update failed.'
GO
IF (SELECT OBJECT_ID('tempdb..#tmpErrors')) IS NOT NULL DROP TABLE #tmpErrors
GO
GO
PRINT N'Update complete.';


GO
